# BusinessIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qualifier** | **str** | The business identity qualifier. | [optional] 
**value** | **str** | The business identity value. | [optional] 

## Example

```python
from openapi_client.models.business_identity import BusinessIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessIdentity from a JSON string
business_identity_instance = BusinessIdentity.from_json(json)
# print the JSON string representation of the object
print(BusinessIdentity.to_json())

# convert the object into a dict
business_identity_dict = business_identity_instance.to_dict()
# create an instance of BusinessIdentity from a dict
business_identity_from_dict = BusinessIdentity.from_dict(business_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


