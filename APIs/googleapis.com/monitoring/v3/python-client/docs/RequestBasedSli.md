# RequestBasedSli

Service Level Indicators for which atomic units of service are counted directly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution_cut** | [**DistributionCut**](DistributionCut.md) |  | [optional] 
**good_total_ratio** | [**TimeSeriesRatio**](TimeSeriesRatio.md) |  | [optional] 

## Example

```python
from openapi_client.models.request_based_sli import RequestBasedSli

# TODO update the JSON string below
json = "{}"
# create an instance of RequestBasedSli from a JSON string
request_based_sli_instance = RequestBasedSli.from_json(json)
# print the JSON string representation of the object
print(RequestBasedSli.to_json())

# convert the object into a dict
request_based_sli_dict = request_based_sli_instance.to_dict()
# create an instance of RequestBasedSli from a dict
request_based_sli_from_dict = RequestBasedSli.from_dict(request_based_sli_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


