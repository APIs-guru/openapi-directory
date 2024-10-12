# ExportsActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_keys** | **List[str]** |  | [optional] 
**date_from** | **str** |  | [optional] 
**date_to** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**notify_email** | **str** |  | [optional] 
**senders** | **List[str]** |  | [optional] 
**states** | **List[str]** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.exports_activity import ExportsActivity

# TODO update the JSON string below
json = "{}"
# create an instance of ExportsActivity from a JSON string
exports_activity_instance = ExportsActivity.from_json(json)
# print the JSON string representation of the object
print(ExportsActivity.to_json())

# convert the object into a dict
exports_activity_dict = exports_activity_instance.to_dict()
# create an instance of ExportsActivity from a dict
exports_activity_from_dict = ExportsActivity.from_dict(exports_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


