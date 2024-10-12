# V1beta1RemoveVisibilityLabelsResponse

Response message for the `RemoveVisibilityLabels` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **List[str]** | The updated set of visibility labels for this consumer on this service. | [optional] 

## Example

```python
from openapi_client.models.v1beta1_remove_visibility_labels_response import V1beta1RemoveVisibilityLabelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1beta1RemoveVisibilityLabelsResponse from a JSON string
v1beta1_remove_visibility_labels_response_instance = V1beta1RemoveVisibilityLabelsResponse.from_json(json)
# print the JSON string representation of the object
print(V1beta1RemoveVisibilityLabelsResponse.to_json())

# convert the object into a dict
v1beta1_remove_visibility_labels_response_dict = v1beta1_remove_visibility_labels_response_instance.to_dict()
# create an instance of V1beta1RemoveVisibilityLabelsResponse from a dict
v1beta1_remove_visibility_labels_response_from_dict = V1beta1RemoveVisibilityLabelsResponse.from_dict(v1beta1_remove_visibility_labels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


