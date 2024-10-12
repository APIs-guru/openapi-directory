# InstancePoolProperties

Properties of an instance pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**license_type** | **str** | The license type. Possible values are &#39;LicenseIncluded&#39; (price for SQL license is included) and &#39;BasePrice&#39; (without SQL license price). | 
**subnet_id** | **str** | Resource ID of the subnet to place this instance pool in. | 
**v_cores** | **int** | Count of vCores belonging to this instance pool. | 

## Example

```python
from openapi_client.models.instance_pool_properties import InstancePoolProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InstancePoolProperties from a JSON string
instance_pool_properties_instance = InstancePoolProperties.from_json(json)
# print the JSON string representation of the object
print(InstancePoolProperties.to_json())

# convert the object into a dict
instance_pool_properties_dict = instance_pool_properties_instance.to_dict()
# create an instance of InstancePoolProperties from a dict
instance_pool_properties_from_dict = InstancePoolProperties.from_dict(instance_pool_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


