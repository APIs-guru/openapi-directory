# coding: utf-8

"""
    Musixmatch API

    Musixmatch lyrics API is a robust service that permits you to search and retrieve lyrics in the simplest possible way. It just works.  Include millions of licensed lyrics on your website or in your application legally.  The fastest, most powerful and legal way to display lyrics on your website or in your application.  #### Read musixmatch API Terms & Conditions and the Privacy Policy: Before getting started, you must take a look at the [API Terms & Conditions](http://musixmatch.com/apiterms/) and the [Privacy Policy](https://developer.musixmatch.com/privacy). We’ve worked hard to make this service completely legal so that we are all protected from any foreseeable liability. Take the time to read this stuff.  #### Register for an API key: All you need to do is [register](https://developer.musixmatch.com/signup) in order to get your API key, a mandatory parameter for most of our API calls. It’s your personal identifier and should be kept secret:  ```   https://api.musixmatch.com/ws/v1.1/track.get?apikey=YOUR_API_KEY ``` #### Integrate the musixmatch service with your web site or application In the most common scenario you only need to implement two API calls:  The first call is to match your catalog to ours using the [track.search](#!/Track/get_track_search) function and the second is to get the lyrics using the [track.lyrics.get](#!/Lyrics/get_track_lyrics_get) api. That’s it!  ## API Methods What does the musiXmatch API do?  The musiXmatch API allows you to read objects from our huge 100% licensed lyrics database.  To make your life easier we are providing you with one or more examples to show you how it could work in the wild. You’ll find both the API request and API response in all the available output formats for each API call. Follow the links below for the details.  The current API version is 1.1, the root URL is located at https://api.musixmatch.com/ws/1.1/  Supported input parameters can be found on the page [Input Parameters](https://developer.musixmatch.com/documentation/input-parameters). Use UTF-8 to encode arguments when calling API methods.  Every response includes a status_code. A list of all status codes can be consulted at [Status Codes](https://developer.musixmatch.com/documentation/status-codes).  ## Music meta data The musiXmatch api is built around lyrics, but there are many other data we provide through the api that can be used to improve every existent music service.  ## Track Inside the track object you can get the following extra information:  ### TRACK RATING  The track rating is a score 0-100 identifying how popular is a song in musixmatch.  You can use this information to sort search results, like the most popular songs of an artist, of a music genre, of a lyrics language.  ### INSTRUMENTAL AND EXPLICIT FLAGS  The instrumental flag identifies songs with music only, no lyrics.  The explicit flag identifies songs with explicit lyrics or explicit title. We're able to identify explicit words and set the flag for the most common languages.  ### FAVOURITES  How many users have this song in their list of favourites.  Can be used to sort tracks by num favourite to identify more popular tracks within a set.  ### MUSIC GENRE  The music genere of the song.  Can be used to group songs by genre, as input for similarity alghorithms, artist genre identification, navigate songs by genere, etc.  ### SONG TITLES TRANSLATIONS  The track title, as translated in different lanauages, can be used to display the right writing for a given user, example:  LIES (Bigbang) becomes 在光化門 in chinese HALLELUJAH (Bigbang) becomes ハレルヤ in japanese   ## Artist Inside the artist object you can get the following nice extra information:  ### COMMENTS AND COUNTRY  An artist comment is a short snippet of text which can be mainly used for disambiguation.  The artist country is the born country of the artist/group  There are two perfect search result if you search by artist with the keyword \"U2\". Indeed there are two distinct music groups with this same name, one is the most known irish group of Bono Vox, the other is a less popular (world wide speaking) group from Japan.  Here's how you can made use of the artist comment in your search result page:  U2 (Irish rock band) U2 (あきやまうに) You can also show the artist country for even better disambiguation:  U2 (Irish rock band) from Ireland U2 (あきやまうに) from Japan ARTIST TRANSLATIONS  When you create a world wide music related service you have to take into consideration to display the artist name in the user's local language. These translation are also used as aliases to improve the search results.  Let's use PSY for this example.  Western people know him as PSY but korean want to see the original name 싸이.  Using the name translations provided by our api you can show to every user the writing they expect to see.  Furthermore, when you search for \"psy gangnam style\" or \"싸이 gangnam style\" with our search/match api you will still be able to find the song.  ### ARTIST RATING  The artist rating is a score 0-100 identifying how popular is an artist in musixmatch.  You can use this information to build charts, for suggestions, to sort search results. In the example above about U2, we use the artist rating to show the irish band before the japanese one in our serp.  ### ARTIST MUSIC GENRE  We provide one or more main artist genre, this information can be used to calculate similar artist, suggestions, or the filter a search by artist genre.    ## Album Inside the album object you can get the following nice extra information:  ### ALBUM RATING  The album rating is a score 0-100 identifying how popular is an album in musixmatch.  You can use this information to sort search results, like the most popular albums of an artist.  ### ALBUM RATING  The album rating is a score 0-100 identifying how popular is an album in musixmatch.  You can use this information to sort search results, like the most popular albums of an artist.  ### ALBUM COPYRIGHT AND LABEL  For most of our albums we can provide extra information like for example:  Label: Universal-Island Records Ltd. Copyright: (P) 2013 Rubyworks, under license to Columbia Records, a Division of Sony Music Entertainment. ALBUM TYPE AND RELEASE DATE  The album official release date can be used to sort an artist's albums view starting by the most recent one.  Album can also be filtered or grouped by type: Single, Album, Compilation, Remix, Live. This can help to build an artist page with a more organized structure.  ### ALBUM MUSIC GENRE  For most of the albums we provide two groups of music genres. Primary and secondary. This information can be used to help user navigate albums by genre.  An example could be:  Primary genere: POP Secondary genre: K-POP or Mandopop 

    The version of the OpenAPI document: 1.1.0
    Contact: info@musixmatch.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictFloat, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from openapi_client.models.album_primary_genres import AlbumPrimaryGenres
from openapi_client.models.album_secondary_genres import AlbumSecondaryGenres
from typing import Optional, Set
from typing_extensions import Self

class Album(BaseModel):
    """
    a album of songs in the Musixmatch database.
    """ # noqa: E501
    album_copyright: Optional[StrictStr] = None
    album_coverart_100x100: Optional[StrictStr] = None
    album_coverart_350x350: Optional[StrictStr] = None
    album_coverart_500x500: Optional[StrictStr] = None
    album_coverart_800x800: Optional[StrictStr] = None
    album_edit_url: Optional[StrictStr] = None
    album_id: Optional[Union[StrictFloat, StrictInt]] = None
    album_label: Optional[StrictStr] = None
    album_mbid: Optional[StrictStr] = None
    album_name: Optional[StrictStr] = None
    album_pline: Optional[StrictStr] = None
    album_rating: Optional[Union[StrictFloat, StrictInt]] = None
    album_release_date: Optional[StrictStr] = None
    album_release_type: Optional[StrictStr] = None
    album_track_count: Optional[Union[StrictFloat, StrictInt]] = None
    album_vanity_id: Optional[StrictStr] = None
    artist_id: Optional[Union[StrictFloat, StrictInt]] = None
    artist_name: Optional[StrictStr] = None
    primary_genres: Optional[AlbumPrimaryGenres] = None
    restricted: Optional[Union[StrictFloat, StrictInt]] = None
    secondary_genres: Optional[AlbumSecondaryGenres] = None
    updated_time: Optional[StrictStr] = None
    __properties: ClassVar[List[str]] = ["album_copyright", "album_coverart_100x100", "album_coverart_350x350", "album_coverart_500x500", "album_coverart_800x800", "album_edit_url", "album_id", "album_label", "album_mbid", "album_name", "album_pline", "album_rating", "album_release_date", "album_release_type", "album_track_count", "album_vanity_id", "artist_id", "artist_name", "primary_genres", "restricted", "secondary_genres", "updated_time"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of Album from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of primary_genres
        if self.primary_genres:
            _dict['primary_genres'] = self.primary_genres.to_dict()
        # override the default output from pydantic by calling `to_dict()` of secondary_genres
        if self.secondary_genres:
            _dict['secondary_genres'] = self.secondary_genres.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Album from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "album_copyright": obj.get("album_copyright"),
            "album_coverart_100x100": obj.get("album_coverart_100x100"),
            "album_coverart_350x350": obj.get("album_coverart_350x350"),
            "album_coverart_500x500": obj.get("album_coverart_500x500"),
            "album_coverart_800x800": obj.get("album_coverart_800x800"),
            "album_edit_url": obj.get("album_edit_url"),
            "album_id": obj.get("album_id"),
            "album_label": obj.get("album_label"),
            "album_mbid": obj.get("album_mbid"),
            "album_name": obj.get("album_name"),
            "album_pline": obj.get("album_pline"),
            "album_rating": obj.get("album_rating"),
            "album_release_date": obj.get("album_release_date"),
            "album_release_type": obj.get("album_release_type"),
            "album_track_count": obj.get("album_track_count"),
            "album_vanity_id": obj.get("album_vanity_id"),
            "artist_id": obj.get("artist_id"),
            "artist_name": obj.get("artist_name"),
            "primary_genres": AlbumPrimaryGenres.from_dict(obj["primary_genres"]) if obj.get("primary_genres") is not None else None,
            "restricted": obj.get("restricted"),
            "secondary_genres": AlbumSecondaryGenres.from_dict(obj["secondary_genres"]) if obj.get("secondary_genres") is not None else None,
            "updated_time": obj.get("updated_time")
        })
        return _obj


