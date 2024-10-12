# SubnetListResult

Response for ListSubnets Api service callRetrieves all subnet that belongs to a virtual network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[Subnet]**](Subnet.md) | Gets the subnets in a virtual network | [optional] 

## Example

```python
from openapi_client.models.subnet_list_result import SubnetListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SubnetListResult from a JSON string
subnet_list_result_instance = SubnetListResult.from_json(json)
# print the JSON string representation of the object
print(SubnetListResult.to_json())

# convert the object into a dict
subnet_list_result_dict = subnet_list_result_instance.to_dict()
# create an instance of SubnetListResult from a dict
subnet_list_result_from_dict = SubnetListResult.from_dict(subnet_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


