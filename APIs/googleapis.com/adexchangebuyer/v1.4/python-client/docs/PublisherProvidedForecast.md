# PublisherProvidedForecast

This message carries publisher provided forecasting information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[Dimension]**](Dimension.md) | Publisher provided dimensions. E.g. geo, sizes etc... | [optional] 
**weekly_impressions** | **str** | Publisher provided weekly impressions. | [optional] 
**weekly_uniques** | **str** | Publisher provided weekly uniques. | [optional] 

## Example

```python
from openapi_client.models.publisher_provided_forecast import PublisherProvidedForecast

# TODO update the JSON string below
json = "{}"
# create an instance of PublisherProvidedForecast from a JSON string
publisher_provided_forecast_instance = PublisherProvidedForecast.from_json(json)
# print the JSON string representation of the object
print(PublisherProvidedForecast.to_json())

# convert the object into a dict
publisher_provided_forecast_dict = publisher_provided_forecast_instance.to_dict()
# create an instance of PublisherProvidedForecast from a dict
publisher_provided_forecast_from_dict = PublisherProvidedForecast.from_dict(publisher_provided_forecast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


