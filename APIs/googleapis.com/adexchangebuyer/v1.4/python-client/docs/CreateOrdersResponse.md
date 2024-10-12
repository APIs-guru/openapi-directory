# CreateOrdersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proposals** | [**List[Proposal]**](Proposal.md) | The list of proposals successfully created. | [optional] 

## Example

```python
from openapi_client.models.create_orders_response import CreateOrdersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrdersResponse from a JSON string
create_orders_response_instance = CreateOrdersResponse.from_json(json)
# print the JSON string representation of the object
print(CreateOrdersResponse.to_json())

# convert the object into a dict
create_orders_response_dict = create_orders_response_instance.to_dict()
# create an instance of CreateOrdersResponse from a dict
create_orders_response_from_dict = CreateOrdersResponse.from_dict(create_orders_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


