# Pools

Swimming pool or recreational water facilities available at the hotel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adult_pool** | **bool** | Adult pool. A pool restricted for use by adults only. Can be indoors or outdoors. | [optional] 
**adult_pool_exception** | **str** | Adult pool exception. | [optional] 
**hot_tub** | **bool** | Hot tub. A man-made pool containing bubbling water maintained at a higher temperature and circulated by aerating jets for the purpose of soaking, relaxation and hydrotherapy. Can be indoors or outdoors. Not used for active swimming. Also known as Jacuzzi. Hot tub must be in a common area where all guests can access it. Does not apply to room-specific hot tubs that are only accessible to guest occupying that room. | [optional] 
**hot_tub_exception** | **str** | Hot tub exception. | [optional] 
**indoor_pool** | **bool** | Indoor pool. A pool located inside the hotel and available for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children. | [optional] 
**indoor_pool_exception** | **str** | Indoor pool exception. | [optional] 
**indoor_pools_count** | **int** | Indoor pools count. The sum of all indoor pools at the hotel. | [optional] 
**indoor_pools_count_exception** | **str** | Indoor pools count exception. | [optional] 
**lazy_river** | **bool** | Lazy river. A man-made pool or several interconnected recreational pools built to mimic the shape and current of a winding river where guests float in the water on inflated rubber tubes. Can be indoors or outdoors. | [optional] 
**lazy_river_exception** | **str** | Lazy river exception. | [optional] 
**lifeguard** | **bool** | Lifeguard. A trained member of the hotel staff stationed by the hotel&#39;s indoor or outdoor swimming area and responsible for the safety of swimming guests. | [optional] 
**lifeguard_exception** | **str** | Lifeguard exception. | [optional] 
**outdoor_pool** | **bool** | Outdoor pool. A pool located outside on the grounds of the hotel and available for guests to use for swimming, soaking or recreation. Use may or may not be restricted to adults and/or children. | [optional] 
**outdoor_pool_exception** | **str** | Outdoor pool exception. | [optional] 
**outdoor_pools_count** | **int** | Outdoor pools count. The sum of all outdoor pools at the hotel. | [optional] 
**outdoor_pools_count_exception** | **str** | Outdoor pools count exception. | [optional] 
**pool** | **bool** | Pool. The presence of a pool, either indoors or outdoors, for guests to use for swimming and/or soaking. Use may or may not be restricted to adults and/or children. | [optional] 
**pool_exception** | **str** | Pool exception. | [optional] 
**pools_count** | **int** | Pools count. The sum of all pools at the hotel. | [optional] 
**pools_count_exception** | **str** | Pools count exception. | [optional] 
**wading_pool** | **bool** | Wading pool. A shallow pool designed for small children to play in. Can be indoors or outdoors. Also known as kiddie pool. | [optional] 
**wading_pool_exception** | **str** | Wading pool exception. | [optional] 
**water_park** | **bool** | Water park. An aquatic recreation area with a large pool or series of pools that has features such as a water slide or tube, wavepool, fountains, rope swings, and/or obstacle course. Can be indoors or outdoors. Also known as adventure pool. | [optional] 
**water_park_exception** | **str** | Water park exception. | [optional] 
**waterslide** | **bool** | Waterslide. A continuously wetted chute positioned by an indoor or outdoor pool which people slide down into the water. | [optional] 
**waterslide_exception** | **str** | Waterslide exception. | [optional] 
**wave_pool** | **bool** | Wave pool. A large indoor or outdoor pool with a machine that produces water currents to mimic the ocean&#39;s crests. | [optional] 
**wave_pool_exception** | **str** | Wave pool exception. | [optional] 

## Example

```python
from openapi_client.models.pools import Pools

# TODO update the JSON string below
json = "{}"
# create an instance of Pools from a JSON string
pools_instance = Pools.from_json(json)
# print the JSON string representation of the object
print(Pools.to_json())

# convert the object into a dict
pools_dict = pools_instance.to_dict()
# create an instance of Pools from a dict
pools_from_dict = Pools.from_dict(pools_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


