# FlagMessageDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pin_changed** | **bool** |  | [optional] 
**should_enrich** | **bool** |  | [optional] 
**skip_push** | **bool** |  | [optional] 
**updated_by_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.flag_message_details import FlagMessageDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FlagMessageDetails from a JSON string
flag_message_details_instance = FlagMessageDetails.from_json(json)
# print the JSON string representation of the object
print(FlagMessageDetails.to_json())

# convert the object into a dict
flag_message_details_dict = flag_message_details_instance.to_dict()
# create an instance of FlagMessageDetails from a dict
flag_message_details_from_dict = FlagMessageDetails.from_dict(flag_message_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


