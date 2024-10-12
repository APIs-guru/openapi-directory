# HanaInstancesListResult

The response from the List HANA Instances operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of HANA instances. | [optional] 
**value** | [**List[HanaInstance]**](HanaInstance.md) | The list of SAP HANA on Azure instances. | [optional] 

## Example

```python
from openapi_client.models.hana_instances_list_result import HanaInstancesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of HanaInstancesListResult from a JSON string
hana_instances_list_result_instance = HanaInstancesListResult.from_json(json)
# print the JSON string representation of the object
print(HanaInstancesListResult.to_json())

# convert the object into a dict
hana_instances_list_result_dict = hana_instances_list_result_instance.to_dict()
# create an instance of HanaInstancesListResult from a dict
hana_instances_list_result_from_dict = HanaInstancesListResult.from_dict(hana_instances_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


