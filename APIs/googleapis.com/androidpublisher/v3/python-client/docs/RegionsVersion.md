# RegionsVersion

The version of the available regions being used for the specified resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Required. A string representing the version of available regions being used for the specified resource. Regional prices for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region&#39;s version and set of regional prices and currencies will succeed even though a new version is available. The latest version is 2022/02. | [optional] 

## Example

```python
from openapi_client.models.regions_version import RegionsVersion

# TODO update the JSON string below
json = "{}"
# create an instance of RegionsVersion from a JSON string
regions_version_instance = RegionsVersion.from_json(json)
# print the JSON string representation of the object
print(RegionsVersion.to_json())

# convert the object into a dict
regions_version_dict = regions_version_instance.to_dict()
# create an instance of RegionsVersion from a dict
regions_version_from_dict = RegionsVersion.from_dict(regions_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


