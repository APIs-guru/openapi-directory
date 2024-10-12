# GrafeasV1beta1IntotoDetails

This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signatures** | [**List[GrafeasV1beta1IntotoSignature]**](GrafeasV1beta1IntotoSignature.md) |  | [optional] 
**signed** | [**Link**](Link.md) |  | [optional] 

## Example

```python
from openapi_client.models.grafeas_v1beta1_intoto_details import GrafeasV1beta1IntotoDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GrafeasV1beta1IntotoDetails from a JSON string
grafeas_v1beta1_intoto_details_instance = GrafeasV1beta1IntotoDetails.from_json(json)
# print the JSON string representation of the object
print(GrafeasV1beta1IntotoDetails.to_json())

# convert the object into a dict
grafeas_v1beta1_intoto_details_dict = grafeas_v1beta1_intoto_details_instance.to_dict()
# create an instance of GrafeasV1beta1IntotoDetails from a dict
grafeas_v1beta1_intoto_details_from_dict = GrafeasV1beta1IntotoDetails.from_dict(grafeas_v1beta1_intoto_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


