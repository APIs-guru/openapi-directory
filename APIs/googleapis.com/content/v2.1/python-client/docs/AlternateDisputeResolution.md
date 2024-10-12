# AlternateDisputeResolution

The Alternate Dispute Resolution (ADR) that may be available to merchants in some regions. If present, the link should be shown on the same page as the list of issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The label for the alternate dispute resolution link. | [optional] 
**uri** | **str** | The URL pointing to a page, where merchant can request alternative dispute resolution with an [external body](https://support.google.com/european-union-digital-services-act-redress-options/answer/13535501). | [optional] 

## Example

```python
from openapi_client.models.alternate_dispute_resolution import AlternateDisputeResolution

# TODO update the JSON string below
json = "{}"
# create an instance of AlternateDisputeResolution from a JSON string
alternate_dispute_resolution_instance = AlternateDisputeResolution.from_json(json)
# print the JSON string representation of the object
print(AlternateDisputeResolution.to_json())

# convert the object into a dict
alternate_dispute_resolution_dict = alternate_dispute_resolution_instance.to_dict()
# create an instance of AlternateDisputeResolution from a dict
alternate_dispute_resolution_from_dict = AlternateDisputeResolution.from_dict(alternate_dispute_resolution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


