# LogicalSubnetModel

Properties of a logical subnet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_pools** | **List[str]** | All IP pools which belong to this subnet. | [optional] 
**is_public** | **bool** | The visibility status of the IP pool.  If is true the associated pools are public IP address pools. | [optional] 
**metadata** | **Dict[str, str]** | Metadata related to the logical network. | [optional] 

## Example

```python
from openapi_client.models.logical_subnet_model import LogicalSubnetModel

# TODO update the JSON string below
json = "{}"
# create an instance of LogicalSubnetModel from a JSON string
logical_subnet_model_instance = LogicalSubnetModel.from_json(json)
# print the JSON string representation of the object
print(LogicalSubnetModel.to_json())

# convert the object into a dict
logical_subnet_model_dict = logical_subnet_model_instance.to_dict()
# create an instance of LogicalSubnetModel from a dict
logical_subnet_model_from_dict = LogicalSubnetModel.from_dict(logical_subnet_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


