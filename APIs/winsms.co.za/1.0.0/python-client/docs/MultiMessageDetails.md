# MultiMessageDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[MessageDetails]**](MessageDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.multi_message_details import MultiMessageDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MultiMessageDetails from a JSON string
multi_message_details_instance = MultiMessageDetails.from_json(json)
# print the JSON string representation of the object
print(MultiMessageDetails.to_json())

# convert the object into a dict
multi_message_details_dict = multi_message_details_instance.to_dict()
# create an instance of MultiMessageDetails from a dict
multi_message_details_from_dict = MultiMessageDetails.from_dict(multi_message_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


