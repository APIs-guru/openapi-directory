# XPSColumnSpecForecastingMetadata

=========================================================================== # The fields below are used exclusively for Forecasting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_type** | **str** | The type of the column for FORECASTING model training purposes. | [optional] 

## Example

```python
from openapi_client.models.xps_column_spec_forecasting_metadata import XPSColumnSpecForecastingMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of XPSColumnSpecForecastingMetadata from a JSON string
xps_column_spec_forecasting_metadata_instance = XPSColumnSpecForecastingMetadata.from_json(json)
# print the JSON string representation of the object
print(XPSColumnSpecForecastingMetadata.to_json())

# convert the object into a dict
xps_column_spec_forecasting_metadata_dict = xps_column_spec_forecasting_metadata_instance.to_dict()
# create an instance of XPSColumnSpecForecastingMetadata from a dict
xps_column_spec_forecasting_metadata_from_dict = XPSColumnSpecForecastingMetadata.from_dict(xps_column_spec_forecasting_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


