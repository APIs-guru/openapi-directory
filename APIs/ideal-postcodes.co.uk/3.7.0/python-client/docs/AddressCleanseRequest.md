# AddressCleanseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | Freeform address input to cleanse  | 

## Example

```python
from openapi_client.models.address_cleanse_request import AddressCleanseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddressCleanseRequest from a JSON string
address_cleanse_request_instance = AddressCleanseRequest.from_json(json)
# print the JSON string representation of the object
print(AddressCleanseRequest.to_json())

# convert the object into a dict
address_cleanse_request_dict = address_cleanse_request_instance.to_dict()
# create an instance of AddressCleanseRequest from a dict
address_cleanse_request_from_dict = AddressCleanseRequest.from_dict(address_cleanse_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


