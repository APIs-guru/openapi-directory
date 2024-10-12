# GethDetails

Options for the Geth execution client. See [Command-line Options](https://geth.ethereum.org/docs/fundamentals/command-line-options) for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**garbage_collection_mode** | **str** | Immutable. Blockchain garbage collection mode. | [optional] 

## Example

```python
from openapi_client.models.geth_details import GethDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GethDetails from a JSON string
geth_details_instance = GethDetails.from_json(json)
# print the JSON string representation of the object
print(GethDetails.to_json())

# convert the object into a dict
geth_details_dict = geth_details_instance.to_dict()
# create an instance of GethDetails from a dict
geth_details_from_dict = GethDetails.from_dict(geth_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


