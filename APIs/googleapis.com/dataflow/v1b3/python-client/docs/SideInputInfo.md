# SideInputInfo

Information about a side input of a DoFn or an input of a SeqDoFn.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **Dict[str, object]** | How to interpret the source element(s) as a side input value. | [optional] 
**sources** | [**List[Source]**](Source.md) | The source(s) to read element(s) from to get the value of this side input. If more than one source, then the elements are taken from the sources, in the specified order if order matters. At least one source is required. | [optional] 
**tag** | **str** | The id of the tag the user code will access this side input by; this should correspond to the tag of some MultiOutputInfo. | [optional] 

## Example

```python
from openapi_client.models.side_input_info import SideInputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SideInputInfo from a JSON string
side_input_info_instance = SideInputInfo.from_json(json)
# print the JSON string representation of the object
print(SideInputInfo.to_json())

# convert the object into a dict
side_input_info_dict = side_input_info_instance.to_dict()
# create an instance of SideInputInfo from a dict
side_input_info_from_dict = SideInputInfo.from_dict(side_input_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


