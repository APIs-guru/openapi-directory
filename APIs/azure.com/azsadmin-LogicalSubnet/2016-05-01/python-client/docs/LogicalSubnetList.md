# LogicalSubnetList

Pageable list of logical subnets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[LogicalSubnet]**](LogicalSubnet.md) | List of logical subnets. | [optional] 

## Example

```python
from openapi_client.models.logical_subnet_list import LogicalSubnetList

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalSubnetList from a JSON string
logical_subnet_list_instance = LogicalSubnetList.from_json(json)
# print the JSON string representation of the object
print(LogicalSubnetList.to_json())

# convert the object into a dict
logical_subnet_list_dict = logical_subnet_list_instance.to_dict()
# create an instance of LogicalSubnetList from a dict
logical_subnet_list_from_dict = LogicalSubnetList.from_dict(logical_subnet_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


