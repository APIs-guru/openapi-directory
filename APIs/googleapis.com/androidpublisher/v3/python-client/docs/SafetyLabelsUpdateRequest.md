# SafetyLabelsUpdateRequest

Request to update Safety Labels of an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**safety_labels** | **str** | Required. Contents of the CSV file containing Data Safety responses. For the format of this file, see the Help Center documentation at https://support.google.com/googleplay/android-developer/answer/10787469?#zippy&#x3D;%2Cunderstand-the-csv-format To download an up to date template, follow the steps at https://support.google.com/googleplay/android-developer/answer/10787469?#zippy&#x3D;%2Cexport-to-a-csv-file | [optional] 

## Example

```python
from openapi_client.models.safety_labels_update_request import SafetyLabelsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SafetyLabelsUpdateRequest from a JSON string
safety_labels_update_request_instance = SafetyLabelsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(SafetyLabelsUpdateRequest.to_json())

# convert the object into a dict
safety_labels_update_request_dict = safety_labels_update_request_instance.to_dict()
# create an instance of SafetyLabelsUpdateRequest from a dict
safety_labels_update_request_from_dict = SafetyLabelsUpdateRequest.from_dict(safety_labels_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


