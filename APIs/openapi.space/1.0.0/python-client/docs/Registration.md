# Registration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** |  | 
**username** | **str** |  | 
**email** | **str** |  | 

## Example

```python
from openapi_client.models.registration import Registration

# TODO update the JSON string below
json = "{}"
# create an instance of Registration from a JSON string
registration_instance = Registration.from_json(json)
# print the JSON string representation of the object
print(Registration.to_json())

# convert the object into a dict
registration_dict = registration_instance.to_dict()
# create an instance of Registration from a dict
registration_from_dict = Registration.from_dict(registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


