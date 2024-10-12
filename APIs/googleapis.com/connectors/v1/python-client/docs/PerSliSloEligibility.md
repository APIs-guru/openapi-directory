# PerSliSloEligibility

PerSliSloEligibility is a mapping from an SLI name to eligibility.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligibilities** | [**Dict[str, SloEligibility]**](SloEligibility.md) | An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. | [optional] 

## Example

```python
from openapi_client.models.per_sli_slo_eligibility import PerSliSloEligibility

# TODO update the JSON string below
json = "{}"
# create an instance of PerSliSloEligibility from a JSON string
per_sli_slo_eligibility_instance = PerSliSloEligibility.from_json(json)
# print the JSON string representation of the object
print(PerSliSloEligibility.to_json())

# convert the object into a dict
per_sli_slo_eligibility_dict = per_sli_slo_eligibility_instance.to_dict()
# create an instance of PerSliSloEligibility from a dict
per_sli_slo_eligibility_from_dict = PerSliSloEligibility.from_dict(per_sli_slo_eligibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


