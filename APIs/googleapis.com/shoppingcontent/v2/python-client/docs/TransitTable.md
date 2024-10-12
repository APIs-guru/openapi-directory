# TransitTable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postal_code_group_names** | **List[str]** | A list of postal group names. The last value can be &#x60;\&quot;all other locations\&quot;&#x60;. Example: &#x60;[\&quot;zone 1\&quot;, \&quot;zone 2\&quot;, \&quot;all other locations\&quot;]&#x60;. The referred postal code groups must match the delivery country of the service. | [optional] 
**rows** | [**List[TransitTableTransitTimeRow]**](TransitTableTransitTimeRow.md) |  | [optional] 
**transit_time_labels** | **List[str]** | A list of transit time labels. The last value can be &#x60;\&quot;all other labels\&quot;&#x60;. Example: &#x60;[\&quot;food\&quot;, \&quot;electronics\&quot;, \&quot;all other labels\&quot;]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.transit_table import TransitTable

# TODO update the JSON string below
json = "{}"
# create an instance of TransitTable from a JSON string
transit_table_instance = TransitTable.from_json(json)
# print the JSON string representation of the object
print(TransitTable.to_json())

# convert the object into a dict
transit_table_dict = transit_table_instance.to_dict()
# create an instance of TransitTable from a dict
transit_table_from_dict = TransitTable.from_dict(transit_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


