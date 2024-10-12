# Schedule2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | A schedule must be &lt;strong&gt;enabled&lt;/strong&gt; to run. Specify &lt;strong&gt;enabled&lt;/strong&gt; to run the schedule or &lt;strong&gt;disabled&lt;/strong&gt; to turn off the schedule so that it doesn&#39;t run. | [optional] 

## Example

```python
from openapi_client.models.schedule2 import Schedule2

# TODO update the JSON string below
json = "{}"
# create an instance of Schedule2 from a JSON string
schedule2_instance = Schedule2.from_json(json)
# print the JSON string representation of the object
print(Schedule2.to_json())

# convert the object into a dict
schedule2_dict = schedule2_instance.to_dict()
# create an instance of Schedule2 from a dict
schedule2_from_dict = Schedule2.from_dict(schedule2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


