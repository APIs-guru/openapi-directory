# SapWorkload

The body of sap workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | [**SapComponent**](SapComponent.md) |  | [optional] 
**database** | [**SapComponent**](SapComponent.md) |  | [optional] 
**metadata** | **Dict[str, str]** | Output only. The metadata for SAP workload. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sap_workload import SapWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of SapWorkload from a JSON string
sap_workload_instance = SapWorkload.from_json(json)
# print the JSON string representation of the object
print(SapWorkload.to_json())

# convert the object into a dict
sap_workload_dict = sap_workload_instance.to_dict()
# create an instance of SapWorkload from a dict
sap_workload_from_dict = SapWorkload.from_dict(sap_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


