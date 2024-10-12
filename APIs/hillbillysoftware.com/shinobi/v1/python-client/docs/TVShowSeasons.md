# TVShowSeasons


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episodes** | **str** |  | [optional] 
**externals** | [**List[ExternalIDs]**](ExternalIDs.md) |  | [optional] 
**seasons** | **str** |  | [optional] 
**showname** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tv_show_seasons import TVShowSeasons

# TODO update the JSON string below
json = "{}"
# create an instance of TVShowSeasons from a JSON string
tv_show_seasons_instance = TVShowSeasons.from_json(json)
# print the JSON string representation of the object
print(TVShowSeasons.to_json())

# convert the object into a dict
tv_show_seasons_dict = tv_show_seasons_instance.to_dict()
# create an instance of TVShowSeasons from a dict
tv_show_seasons_from_dict = TVShowSeasons.from_dict(tv_show_seasons_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


