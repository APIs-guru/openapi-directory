# ParentProductConfig

ParentProductConfig is the configuration of the parent product of the cluster. This field is used by Google internal products that are built on top of a GKE cluster and take the ownership of the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Labels contain the configuration of the parent product. | [optional] 
**product_name** | **str** | Name of the parent product associated with the cluster. | [optional] 

## Example

```python
from openapi_client.models.parent_product_config import ParentProductConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ParentProductConfig from a JSON string
parent_product_config_instance = ParentProductConfig.from_json(json)
# print the JSON string representation of the object
print(ParentProductConfig.to_json())

# convert the object into a dict
parent_product_config_dict = parent_product_config_instance.to_dict()
# create an instance of ParentProductConfig from a dict
parent_product_config_from_dict = ParentProductConfig.from_dict(parent_product_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


