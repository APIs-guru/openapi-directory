# FundingReversal144

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reversal_reason** | **str** | Brief description of reason for reversal. Details- alpha-numeric 1-50 | 

## Example

```python
from openapi_client.models.funding_reversal144 import FundingReversal144

# TODO update the JSON string below
json = "{}"
# create an instance of FundingReversal144 from a JSON string
funding_reversal144_instance = FundingReversal144.from_json(json)
# print the JSON string representation of the object
print(FundingReversal144.to_json())

# convert the object into a dict
funding_reversal144_dict = funding_reversal144_instance.to_dict()
# create an instance of FundingReversal144 from a dict
funding_reversal144_from_dict = FundingReversal144.from_dict(funding_reversal144_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


