# Phone


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **str** | Phone number | 
**type** | **str** | Phone number type, home, office, mobile, etc | 

## Example

```python
from openapi_client.models.phone import Phone

# TODO update the JSON string below
json = "{}"
# create an instance of Phone from a JSON string
phone_instance = Phone.from_json(json)
# print the JSON string representation of the object
print(Phone.to_json())

# convert the object into a dict
phone_dict = phone_instance.to_dict()
# create an instance of Phone from a dict
phone_from_dict = Phone.from_dict(phone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


