# SasPortalFrequencyRange

Frequency range from `low_frequency` to `high_frequency`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_frequency_mhz** | **float** | The highest frequency of the frequency range in MHz. | [optional] 
**low_frequency_mhz** | **float** | The lowest frequency of the frequency range in MHz. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_frequency_range import SasPortalFrequencyRange

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalFrequencyRange from a JSON string
sas_portal_frequency_range_instance = SasPortalFrequencyRange.from_json(json)
# print the JSON string representation of the object
print(SasPortalFrequencyRange.to_json())

# convert the object into a dict
sas_portal_frequency_range_dict = sas_portal_frequency_range_instance.to_dict()
# create an instance of SasPortalFrequencyRange from a dict
sas_portal_frequency_range_from_dict = SasPortalFrequencyRange.from_dict(sas_portal_frequency_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


