# GceInstanceFilter

Message describing compute engine instance filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_accounts** | **List[str]** | Service account of compute engine | [optional] 

## Example

```python
from openapi_client.models.gce_instance_filter import GceInstanceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GceInstanceFilter from a JSON string
gce_instance_filter_instance = GceInstanceFilter.from_json(json)
# print the JSON string representation of the object
print(GceInstanceFilter.to_json())

# convert the object into a dict
gce_instance_filter_dict = gce_instance_filter_instance.to_dict()
# create an instance of GceInstanceFilter from a dict
gce_instance_filter_from_dict = GceInstanceFilter.from_dict(gce_instance_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


