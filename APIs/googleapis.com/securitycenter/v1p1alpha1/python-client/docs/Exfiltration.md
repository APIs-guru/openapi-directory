# Exfiltration

Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was copied to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sources** | [**List[ExfilResource]**](ExfilResource.md) | If there are multiple sources, then the data is considered \&quot;joined\&quot; between them. For instance, BigQuery can join multiple tables, and each table would be considered a source. | [optional] 
**targets** | [**List[ExfilResource]**](ExfilResource.md) | If there are multiple targets, each target would get a complete copy of the \&quot;joined\&quot; source data. | [optional] 
**total_exfiltrated_bytes** | **str** | Total exfiltrated bytes processed for the entire job. | [optional] 

## Example

```python
from openapi_client.models.exfiltration import Exfiltration

# TODO update the JSON string below
json = "{}"
# create an instance of Exfiltration from a JSON string
exfiltration_instance = Exfiltration.from_json(json)
# print the JSON string representation of the object
print(Exfiltration.to_json())

# convert the object into a dict
exfiltration_dict = exfiltration_instance.to_dict()
# create an instance of Exfiltration from a dict
exfiltration_from_dict = Exfiltration.from_dict(exfiltration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


