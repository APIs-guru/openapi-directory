# MultiOutputInfo

Information about an output of a multi-output DoFn.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | The id of the tag the user code will emit to this output by; this should correspond to the tag of some SideInputInfo. | [optional] 

## Example

```python
from openapi_client.models.multi_output_info import MultiOutputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MultiOutputInfo from a JSON string
multi_output_info_instance = MultiOutputInfo.from_json(json)
# print the JSON string representation of the object
print(MultiOutputInfo.to_json())

# convert the object into a dict
multi_output_info_dict = multi_output_info_instance.to_dict()
# create an instance of MultiOutputInfo from a dict
multi_output_info_from_dict = MultiOutputInfo.from_dict(multi_output_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


