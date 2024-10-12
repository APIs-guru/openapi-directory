# FailedLocation

Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond. | [optional] 

## Example

```python
from openapi_client.models.failed_location import FailedLocation

# TODO update the JSON string below
json = "{}"
# create an instance of FailedLocation from a JSON string
failed_location_instance = FailedLocation.from_json(json)
# print the JSON string representation of the object
print(FailedLocation.to_json())

# convert the object into a dict
failed_location_dict = failed_location_instance.to_dict()
# create an instance of FailedLocation from a dict
failed_location_from_dict = FailedLocation.from_dict(failed_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


