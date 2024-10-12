# GcsDestination

The Cloud Storage location for the output content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. Data destination URI (e.g. &#39;gs://my_bucket/my_object&#39;). Existing files will be overwritten. | [optional] 

## Example

```python
from openapi_client.models.gcs_destination import GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GcsDestination from a JSON string
gcs_destination_instance = GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GcsDestination.to_json())

# convert the object into a dict
gcs_destination_dict = gcs_destination_instance.to_dict()
# create an instance of GcsDestination from a dict
gcs_destination_from_dict = GcsDestination.from_dict(gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


