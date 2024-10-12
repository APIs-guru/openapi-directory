# Source

Source message describes a specific vm migration Source resource. It contains the source environment information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws** | [**AwsSourceDetails**](AwsSourceDetails.md) |  | [optional] 
**azure** | [**AzureSourceDetails**](AzureSourceDetails.md) |  | [optional] 
**create_time** | **str** | Output only. The create time timestamp. | [optional] [readonly] 
**description** | **str** | User-provided description of the source. | [optional] 
**encryption** | [**Encryption**](Encryption.md) |  | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels of the source. | [optional] 
**name** | **str** | Output only. The Source name. | [optional] [readonly] 
**update_time** | **str** | Output only. The update time timestamp. | [optional] [readonly] 
**vmware** | [**VmwareSourceDetails**](VmwareSourceDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


