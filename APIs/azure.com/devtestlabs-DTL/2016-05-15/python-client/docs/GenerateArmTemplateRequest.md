# GenerateArmTemplateRequest

Parameters for generating an ARM template for deploying artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_upload_options** | **str** | Options for uploading the files for the artifact. UploadFilesAndGenerateSasTokens is the default value. | [optional] 
**location** | **str** | The location of the virtual machine. | [optional] 
**parameters** | [**List[ParameterInfo]**](ParameterInfo.md) | The parameters of the ARM template. | [optional] 
**virtual_machine_name** | **str** | The resource name of the virtual machine. | [optional] 

## Example

```python
from openapi_client.models.generate_arm_template_request import GenerateArmTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateArmTemplateRequest from a JSON string
generate_arm_template_request_instance = GenerateArmTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateArmTemplateRequest.to_json())

# convert the object into a dict
generate_arm_template_request_dict = generate_arm_template_request_instance.to_dict()
# create an instance of GenerateArmTemplateRequest from a dict
generate_arm_template_request_from_dict = GenerateArmTemplateRequest.from_dict(generate_arm_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


