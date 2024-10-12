# CustomerAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CustomerAdd200ResponseResult**](CustomerAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_add200_response import CustomerAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAdd200Response from a JSON string
customer_add200_response_instance = CustomerAdd200Response.from_json(json)
# print the JSON string representation of the object
print(CustomerAdd200Response.to_json())

# convert the object into a dict
customer_add200_response_dict = customer_add200_response_instance.to_dict()
# create an instance of CustomerAdd200Response from a dict
customer_add200_response_from_dict = CustomerAdd200Response.from_dict(customer_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


