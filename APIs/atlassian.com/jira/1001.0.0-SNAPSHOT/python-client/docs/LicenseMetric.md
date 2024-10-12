# LicenseMetric

A license metric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the license metric. | [optional] 
**value** | **str** | The value for the license metric. | [optional] 

## Example

```python
from openapi_client.models.license_metric import LicenseMetric

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseMetric from a JSON string
license_metric_instance = LicenseMetric.from_json(json)
# print the JSON string representation of the object
print(LicenseMetric.to_json())

# convert the object into a dict
license_metric_dict = license_metric_instance.to_dict()
# create an instance of LicenseMetric from a dict
license_metric_from_dict = LicenseMetric.from_dict(license_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


