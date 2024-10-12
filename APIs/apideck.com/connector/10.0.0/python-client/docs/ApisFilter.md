# ApisFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ApiStatus**](ApiStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.apis_filter import ApisFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ApisFilter from a JSON string
apis_filter_instance = ApisFilter.from_json(json)
# print the JSON string representation of the object
print(ApisFilter.to_json())

# convert the object into a dict
apis_filter_dict = apis_filter_instance.to_dict()
# create an instance of ApisFilter from a dict
apis_filter_from_dict = ApisFilter.from_dict(apis_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


