# SetInstanceLabelsRequest

Request for setting instance labels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Labels to apply to this instance. These can be later modified by the setLabels method | [optional] 

## Example

```python
from openapi_client.models.set_instance_labels_request import SetInstanceLabelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetInstanceLabelsRequest from a JSON string
set_instance_labels_request_instance = SetInstanceLabelsRequest.from_json(json)
# print the JSON string representation of the object
print(SetInstanceLabelsRequest.to_json())

# convert the object into a dict
set_instance_labels_request_dict = set_instance_labels_request_instance.to_dict()
# create an instance of SetInstanceLabelsRequest from a dict
set_instance_labels_request_from_dict = SetInstanceLabelsRequest.from_dict(set_instance_labels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


