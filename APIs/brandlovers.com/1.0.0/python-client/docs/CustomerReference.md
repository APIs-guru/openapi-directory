# CustomerReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Customer name | [optional] 
**phone_number** | **str** | Customer phone mumber | [optional] 

## Example

```python
from openapi_client.models.customer_reference import CustomerReference

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerReference from a JSON string
customer_reference_instance = CustomerReference.from_json(json)
# print the JSON string representation of the object
print(CustomerReference.to_json())

# convert the object into a dict
customer_reference_dict = customer_reference_instance.to_dict()
# create an instance of CustomerReference from a dict
customer_reference_from_dict = CustomerReference.from_dict(customer_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


