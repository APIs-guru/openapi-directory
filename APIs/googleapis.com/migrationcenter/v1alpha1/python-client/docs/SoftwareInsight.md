# SoftwareInsight

An insight regarding software detected on an asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_software** | [**DetectedSoftware**](DetectedSoftware.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_insight import SoftwareInsight

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareInsight from a JSON string
software_insight_instance = SoftwareInsight.from_json(json)
# print the JSON string representation of the object
print(SoftwareInsight.to_json())

# convert the object into a dict
software_insight_dict = software_insight_instance.to_dict()
# create an instance of SoftwareInsight from a dict
software_insight_from_dict = SoftwareInsight.from_dict(software_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


