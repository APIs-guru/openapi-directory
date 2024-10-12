# RiskSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_tools_risk** | **str** |  | [optional] 
**crypto_risk** | **str** |  | [optional] 
**kernel_risk** | **str** |  | [optional] 
**net_services_risk** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.risk_summary import RiskSummary

# TODO update the JSON string below
json = "{}"
# create an instance of RiskSummary from a JSON string
risk_summary_instance = RiskSummary.from_json(json)
# print the JSON string representation of the object
print(RiskSummary.to_json())

# convert the object into a dict
risk_summary_dict = risk_summary_instance.to_dict()
# create an instance of RiskSummary from a dict
risk_summary_from_dict = RiskSummary.from_dict(risk_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


