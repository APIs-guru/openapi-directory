# DeployedApplication

The application of the deployed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**log_directory** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**temp_directory** | **str** |  | [optional] 
**type_name** | **str** |  | [optional] 
**work_directory** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deployed_application import DeployedApplication

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedApplication from a JSON string
deployed_application_instance = DeployedApplication.from_json(json)
# print the JSON string representation of the object
print(DeployedApplication.to_json())

# convert the object into a dict
deployed_application_dict = deployed_application_instance.to_dict()
# create an instance of DeployedApplication from a dict
deployed_application_from_dict = DeployedApplication.from_dict(deployed_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


