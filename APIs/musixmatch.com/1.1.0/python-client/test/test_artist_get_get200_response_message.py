# coding: utf-8

"""
    Musixmatch API

    Musixmatch lyrics API is a robust service that permits you to search and retrieve lyrics in the simplest possible way. It just works.  Include millions of licensed lyrics on your website or in your application legally.  The fastest, most powerful and legal way to display lyrics on your website or in your application.  #### Read musixmatch API Terms & Conditions and the Privacy Policy: Before getting started, you must take a look at the [API Terms & Conditions](http://musixmatch.com/apiterms/) and the [Privacy Policy](https://developer.musixmatch.com/privacy). We’ve worked hard to make this service completely legal so that we are all protected from any foreseeable liability. Take the time to read this stuff.  #### Register for an API key: All you need to do is [register](https://developer.musixmatch.com/signup) in order to get your API key, a mandatory parameter for most of our API calls. It’s your personal identifier and should be kept secret:  ```   https://api.musixmatch.com/ws/v1.1/track.get?apikey=YOUR_API_KEY ``` #### Integrate the musixmatch service with your web site or application In the most common scenario you only need to implement two API calls:  The first call is to match your catalog to ours using the [track.search](#!/Track/get_track_search) function and the second is to get the lyrics using the [track.lyrics.get](#!/Lyrics/get_track_lyrics_get) api. That’s it!  ## API Methods What does the musiXmatch API do?  The musiXmatch API allows you to read objects from our huge 100% licensed lyrics database.  To make your life easier we are providing you with one or more examples to show you how it could work in the wild. You’ll find both the API request and API response in all the available output formats for each API call. Follow the links below for the details.  The current API version is 1.1, the root URL is located at https://api.musixmatch.com/ws/1.1/  Supported input parameters can be found on the page [Input Parameters](https://developer.musixmatch.com/documentation/input-parameters). Use UTF-8 to encode arguments when calling API methods.  Every response includes a status_code. A list of all status codes can be consulted at [Status Codes](https://developer.musixmatch.com/documentation/status-codes).  ## Music meta data The musiXmatch api is built around lyrics, but there are many other data we provide through the api that can be used to improve every existent music service.  ## Track Inside the track object you can get the following extra information:  ### TRACK RATING  The track rating is a score 0-100 identifying how popular is a song in musixmatch.  You can use this information to sort search results, like the most popular songs of an artist, of a music genre, of a lyrics language.  ### INSTRUMENTAL AND EXPLICIT FLAGS  The instrumental flag identifies songs with music only, no lyrics.  The explicit flag identifies songs with explicit lyrics or explicit title. We're able to identify explicit words and set the flag for the most common languages.  ### FAVOURITES  How many users have this song in their list of favourites.  Can be used to sort tracks by num favourite to identify more popular tracks within a set.  ### MUSIC GENRE  The music genere of the song.  Can be used to group songs by genre, as input for similarity alghorithms, artist genre identification, navigate songs by genere, etc.  ### SONG TITLES TRANSLATIONS  The track title, as translated in different lanauages, can be used to display the right writing for a given user, example:  LIES (Bigbang) becomes 在光化門 in chinese HALLELUJAH (Bigbang) becomes ハレルヤ in japanese   ## Artist Inside the artist object you can get the following nice extra information:  ### COMMENTS AND COUNTRY  An artist comment is a short snippet of text which can be mainly used for disambiguation.  The artist country is the born country of the artist/group  There are two perfect search result if you search by artist with the keyword \"U2\". Indeed there are two distinct music groups with this same name, one is the most known irish group of Bono Vox, the other is a less popular (world wide speaking) group from Japan.  Here's how you can made use of the artist comment in your search result page:  U2 (Irish rock band) U2 (あきやまうに) You can also show the artist country for even better disambiguation:  U2 (Irish rock band) from Ireland U2 (あきやまうに) from Japan ARTIST TRANSLATIONS  When you create a world wide music related service you have to take into consideration to display the artist name in the user's local language. These translation are also used as aliases to improve the search results.  Let's use PSY for this example.  Western people know him as PSY but korean want to see the original name 싸이.  Using the name translations provided by our api you can show to every user the writing they expect to see.  Furthermore, when you search for \"psy gangnam style\" or \"싸이 gangnam style\" with our search/match api you will still be able to find the song.  ### ARTIST RATING  The artist rating is a score 0-100 identifying how popular is an artist in musixmatch.  You can use this information to build charts, for suggestions, to sort search results. In the example above about U2, we use the artist rating to show the irish band before the japanese one in our serp.  ### ARTIST MUSIC GENRE  We provide one or more main artist genre, this information can be used to calculate similar artist, suggestions, or the filter a search by artist genre.    ## Album Inside the album object you can get the following nice extra information:  ### ALBUM RATING  The album rating is a score 0-100 identifying how popular is an album in musixmatch.  You can use this information to sort search results, like the most popular albums of an artist.  ### ALBUM RATING  The album rating is a score 0-100 identifying how popular is an album in musixmatch.  You can use this information to sort search results, like the most popular albums of an artist.  ### ALBUM COPYRIGHT AND LABEL  For most of our albums we can provide extra information like for example:  Label: Universal-Island Records Ltd. Copyright: (P) 2013 Rubyworks, under license to Columbia Records, a Division of Sony Music Entertainment. ALBUM TYPE AND RELEASE DATE  The album official release date can be used to sort an artist's albums view starting by the most recent one.  Album can also be filtered or grouped by type: Single, Album, Compilation, Remix, Live. This can help to build an artist page with a more organized structure.  ### ALBUM MUSIC GENRE  For most of the albums we provide two groups of music genres. Primary and secondary. This information can be used to help user navigate albums by genre.  An example could be:  Primary genere: POP Secondary genre: K-POP or Mandopop 

    The version of the OpenAPI document: 1.1.0
    Contact: info@musixmatch.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.artist_get_get200_response_message import ArtistGetGet200ResponseMessage

class TestArtistGetGet200ResponseMessage(unittest.TestCase):
    """ArtistGetGet200ResponseMessage unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ArtistGetGet200ResponseMessage:
        """Test ArtistGetGet200ResponseMessage
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ArtistGetGet200ResponseMessage`
        """
        model = ArtistGetGet200ResponseMessage()
        if include_optional:
            return ArtistGetGet200ResponseMessage(
                body = openapi_client.models._artist_get_get_200_response_message_body._artist_get_get_200_response_message_body(
                    artist = openapi_client.models.a_artist_object.a Artist object(
                        artist_alias_list = [
                            openapi_client.models.artist_artist_alias_list_inner.Artist_artist_alias_list_inner(
                                artist_alias = '', )
                            ], 
                        artist_comment = '', 
                        artist_country = '', 
                        artist_credits = openapi_client.models.artist_artist_credits.Artist_artist_credits(
                            artist_list = [
                                ''
                                ], ), 
                        artist_edit_url = '', 
                        artist_id = 1.337, 
                        artist_mbid = '', 
                        artist_name = '', 
                        artist_name_translation_list = [
                            openapi_client.models.artist_artist_name_translation_list_inner.Artist_artist_name_translation_list_inner(
                                artist_name_translation = openapi_client.models.artist_artist_name_translation_list_inner_artist_name_translation.Artist_artist_name_translation_list_inner_artist_name_translation(
                                    language = '', 
                                    translation = '', ), )
                            ], 
                        artist_rating = 1.337, 
                        artist_share_url = '', 
                        artist_twitter_url = '', 
                        artist_vanity_id = '', 
                        managed = 1.337, 
                        primary_genres = openapi_client.models.album_primary_genres.Album_primary_genres(
                            music_genre_list = [
                                openapi_client.models.album_primary_genres_music_genre_list_inner.Album_primary_genres_music_genre_list_inner(
                                    music_genre = openapi_client.models.album_primary_genres_music_genre_list_inner_music_genre.Album_primary_genres_music_genre_list_inner_music_genre(
                                        music_genre_id = 1.337, 
                                        music_genre_name = '', 
                                        music_genre_name_extended = '', 
                                        music_genre_parent_id = 1.337, 
                                        music_genre_vanity = '', ), )
                                ], ), 
                        restricted = 1.337, 
                        secondary_genres = openapi_client.models.album_secondary_genres.Album_secondary_genres(), 
                        updated_time = '', ), ),
                header = openapi_client.models._album_get_get_200_response_message_header._album_get_get_200_response_message_header(
                    execute_time = 1.337, 
                    status_code = 1.337, )
            )
        else:
            return ArtistGetGet200ResponseMessage(
        )
        """

    def testArtistGetGet200ResponseMessage(self):
        """Test ArtistGetGet200ResponseMessage"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
