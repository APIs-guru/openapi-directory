# CustomerCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**CustomerCount200ResponseResult**](CustomerCount200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_count200_response import CustomerCount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerCount200Response from a JSON string
customer_count200_response_instance = CustomerCount200Response.from_json(json)
# print the JSON string representation of the object
print(CustomerCount200Response.to_json())

# convert the object into a dict
customer_count200_response_dict = customer_count200_response_instance.to_dict()
# create an instance of CustomerCount200Response from a dict
customer_count200_response_from_dict = CustomerCount200Response.from_dict(customer_count200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


