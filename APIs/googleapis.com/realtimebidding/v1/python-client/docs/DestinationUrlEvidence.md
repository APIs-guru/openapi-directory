# DestinationUrlEvidence

The full landing page URL of the destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_url** | **str** | The full landing page URL of the destination. | [optional] 

## Example

```python
from openapi_client.models.destination_url_evidence import DestinationUrlEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationUrlEvidence from a JSON string
destination_url_evidence_instance = DestinationUrlEvidence.from_json(json)
# print the JSON string representation of the object
print(DestinationUrlEvidence.to_json())

# convert the object into a dict
destination_url_evidence_dict = destination_url_evidence_instance.to_dict()
# create an instance of DestinationUrlEvidence from a dict
destination_url_evidence_from_dict = DestinationUrlEvidence.from_dict(destination_url_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


