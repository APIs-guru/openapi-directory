/*
 * Portfolio Optimizer
 * Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * `Content-type: application/json`     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * `Content-Encoding: gzip`     This header indicates that the data provided in input to the endpoint is compressed with gzip. * `X-API-Key: <private API key>`     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee = one month of usage.  <p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>   > **Notes:**  > * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  > **Notes:**  > * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. > * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:   >   * `x-ratelimit-limit-second`, the limit on the number of API requests per second >   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second     >   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute >   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  > **Notes:**  > * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
 *
 * The version of the OpenAPI document: 1.0.9
 * Contact: contact@portfoliooptimizer.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.openapitools.client.model.PortfolioAnalysisAlphaPostRequestOneOf;
import org.openapitools.client.model.PortfolioAnalysisAlphaPostRequestOneOf1;
import org.openapitools.client.model.PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner;



import java.io.IOException;
import java.lang.reflect.Type;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapter;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.JsonPrimitive;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonArray;
import com.google.gson.JsonParseException;

import org.openapitools.client.JSON;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:30.576111-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class PortfolioAnalysisAlphaPostRequest extends AbstractOpenApiSchema {
    private static final Logger log = Logger.getLogger(PortfolioAnalysisAlphaPostRequest.class.getName());

    public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
        @SuppressWarnings("unchecked")
        @Override
        public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
            if (!PortfolioAnalysisAlphaPostRequest.class.isAssignableFrom(type.getRawType())) {
                return null; // this class only serializes 'PortfolioAnalysisAlphaPostRequest' and its subtypes
            }
            final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
            final TypeAdapter<PortfolioAnalysisAlphaPostRequestOneOf> adapterPortfolioAnalysisAlphaPostRequestOneOf = gson.getDelegateAdapter(this, TypeToken.get(PortfolioAnalysisAlphaPostRequestOneOf.class));
            final TypeAdapter<PortfolioAnalysisAlphaPostRequestOneOf1> adapterPortfolioAnalysisAlphaPostRequestOneOf1 = gson.getDelegateAdapter(this, TypeToken.get(PortfolioAnalysisAlphaPostRequestOneOf1.class));

            return (TypeAdapter<T>) new TypeAdapter<PortfolioAnalysisAlphaPostRequest>() {
                @Override
                public void write(JsonWriter out, PortfolioAnalysisAlphaPostRequest value) throws IOException {
                    if (value == null || value.getActualInstance() == null) {
                        elementAdapter.write(out, null);
                        return;
                    }

                    // check if the actual instance is of the type `PortfolioAnalysisAlphaPostRequestOneOf`
                    if (value.getActualInstance() instanceof PortfolioAnalysisAlphaPostRequestOneOf) {
                        JsonElement element = adapterPortfolioAnalysisAlphaPostRequestOneOf.toJsonTree((PortfolioAnalysisAlphaPostRequestOneOf)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    // check if the actual instance is of the type `PortfolioAnalysisAlphaPostRequestOneOf1`
                    if (value.getActualInstance() instanceof PortfolioAnalysisAlphaPostRequestOneOf1) {
                        JsonElement element = adapterPortfolioAnalysisAlphaPostRequestOneOf1.toJsonTree((PortfolioAnalysisAlphaPostRequestOneOf1)value.getActualInstance());
                        elementAdapter.write(out, element);
                        return;
                    }
                    throw new IOException("Failed to serialize as the type doesn't match oneOf schemas: PortfolioAnalysisAlphaPostRequestOneOf, PortfolioAnalysisAlphaPostRequestOneOf1");
                }

                @Override
                public PortfolioAnalysisAlphaPostRequest read(JsonReader in) throws IOException {
                    Object deserialized = null;
                    JsonElement jsonElement = elementAdapter.read(in);

                    int match = 0;
                    ArrayList<String> errorMessages = new ArrayList<>();
                    TypeAdapter actualAdapter = elementAdapter;

                    // deserialize PortfolioAnalysisAlphaPostRequestOneOf
                    try {
                        // validate the JSON object to see if any exception is thrown
                        PortfolioAnalysisAlphaPostRequestOneOf.validateJsonElement(jsonElement);
                        actualAdapter = adapterPortfolioAnalysisAlphaPostRequestOneOf;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'PortfolioAnalysisAlphaPostRequestOneOf'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for PortfolioAnalysisAlphaPostRequestOneOf failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'PortfolioAnalysisAlphaPostRequestOneOf'", e);
                    }
                    // deserialize PortfolioAnalysisAlphaPostRequestOneOf1
                    try {
                        // validate the JSON object to see if any exception is thrown
                        PortfolioAnalysisAlphaPostRequestOneOf1.validateJsonElement(jsonElement);
                        actualAdapter = adapterPortfolioAnalysisAlphaPostRequestOneOf1;
                        match++;
                        log.log(Level.FINER, "Input data matches schema 'PortfolioAnalysisAlphaPostRequestOneOf1'");
                    } catch (Exception e) {
                        // deserialization failed, continue
                        errorMessages.add(String.format("Deserialization for PortfolioAnalysisAlphaPostRequestOneOf1 failed with `%s`.", e.getMessage()));
                        log.log(Level.FINER, "Input data does not match schema 'PortfolioAnalysisAlphaPostRequestOneOf1'", e);
                    }

                    if (match == 1) {
                        PortfolioAnalysisAlphaPostRequest ret = new PortfolioAnalysisAlphaPostRequest();
                        ret.setActualInstance(actualAdapter.fromJsonTree(jsonElement));
                        return ret;
                    }

                    throw new IOException(String.format("Failed deserialization for PortfolioAnalysisAlphaPostRequest: %d classes match result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", match, errorMessages, jsonElement.toString()));
                }
            }.nullSafe();
        }
    }

    // store a list of schema names defined in oneOf
    public static final Map<String, Class<?>> schemas = new HashMap<String, Class<?>>();

    public PortfolioAnalysisAlphaPostRequest() {
        super("oneOf", Boolean.FALSE);
    }

    public PortfolioAnalysisAlphaPostRequest(Object o) {
        super("oneOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("PortfolioAnalysisAlphaPostRequestOneOf", PortfolioAnalysisAlphaPostRequestOneOf.class);
        schemas.put("PortfolioAnalysisAlphaPostRequestOneOf1", PortfolioAnalysisAlphaPostRequestOneOf1.class);
    }

    @Override
    public Map<String, Class<?>> getSchemas() {
        return PortfolioAnalysisAlphaPostRequest.schemas;
    }

    /**
     * Set the instance that matches the oneOf child schema, check
     * the instance parameter is valid against the oneOf child schemas:
     * PortfolioAnalysisAlphaPostRequestOneOf, PortfolioAnalysisAlphaPostRequestOneOf1
     *
     * It could be an instance of the 'oneOf' schemas.
     */
    @Override
    public void setActualInstance(Object instance) {
        if (instance instanceof PortfolioAnalysisAlphaPostRequestOneOf) {
            super.setActualInstance(instance);
            return;
        }

        if (instance instanceof PortfolioAnalysisAlphaPostRequestOneOf1) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be PortfolioAnalysisAlphaPostRequestOneOf, PortfolioAnalysisAlphaPostRequestOneOf1");
    }

    /**
     * Get the actual instance, which can be the following:
     * PortfolioAnalysisAlphaPostRequestOneOf, PortfolioAnalysisAlphaPostRequestOneOf1
     *
     * @return The actual instance (PortfolioAnalysisAlphaPostRequestOneOf, PortfolioAnalysisAlphaPostRequestOneOf1)
     */
    @SuppressWarnings("unchecked")
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `PortfolioAnalysisAlphaPostRequestOneOf`. If the actual instance is not `PortfolioAnalysisAlphaPostRequestOneOf`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `PortfolioAnalysisAlphaPostRequestOneOf`
     * @throws ClassCastException if the instance is not `PortfolioAnalysisAlphaPostRequestOneOf`
     */
    public PortfolioAnalysisAlphaPostRequestOneOf getPortfolioAnalysisAlphaPostRequestOneOf() throws ClassCastException {
        return (PortfolioAnalysisAlphaPostRequestOneOf)super.getActualInstance();
    }
    /**
     * Get the actual instance of `PortfolioAnalysisAlphaPostRequestOneOf1`. If the actual instance is not `PortfolioAnalysisAlphaPostRequestOneOf1`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `PortfolioAnalysisAlphaPostRequestOneOf1`
     * @throws ClassCastException if the instance is not `PortfolioAnalysisAlphaPostRequestOneOf1`
     */
    public PortfolioAnalysisAlphaPostRequestOneOf1 getPortfolioAnalysisAlphaPostRequestOneOf1() throws ClassCastException {
        return (PortfolioAnalysisAlphaPostRequestOneOf1)super.getActualInstance();
    }

    /**
     * Validates the JSON Element and throws an exception if issues found
     *
     * @param jsonElement JSON Element
     * @throws IOException if the JSON Element is invalid with respect to PortfolioAnalysisAlphaPostRequest
     */
    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
        // validate oneOf schemas one by one
        int validCount = 0;
        ArrayList<String> errorMessages = new ArrayList<>();
        // validate the json string with PortfolioAnalysisAlphaPostRequestOneOf
        try {
            PortfolioAnalysisAlphaPostRequestOneOf.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for PortfolioAnalysisAlphaPostRequestOneOf failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        // validate the json string with PortfolioAnalysisAlphaPostRequestOneOf1
        try {
            PortfolioAnalysisAlphaPostRequestOneOf1.validateJsonElement(jsonElement);
            validCount++;
        } catch (Exception e) {
            errorMessages.add(String.format("Deserialization for PortfolioAnalysisAlphaPostRequestOneOf1 failed with `%s`.", e.getMessage()));
            // continue to the next one
        }
        if (validCount != 1) {
            throw new IOException(String.format("The JSON string is invalid for PortfolioAnalysisAlphaPostRequest with oneOf schemas: PortfolioAnalysisAlphaPostRequestOneOf, PortfolioAnalysisAlphaPostRequestOneOf1. %d class(es) match the result, expected 1. Detailed failure message for oneOf schemas: %s. JSON: %s", validCount, errorMessages, jsonElement.toString()));
        }
    }

    /**
     * Create an instance of PortfolioAnalysisAlphaPostRequest given an JSON string
     *
     * @param jsonString JSON string
     * @return An instance of PortfolioAnalysisAlphaPostRequest
     * @throws IOException if the JSON string is invalid with respect to PortfolioAnalysisAlphaPostRequest
     */
    public static PortfolioAnalysisAlphaPostRequest fromJson(String jsonString) throws IOException {
        return JSON.getGson().fromJson(jsonString, PortfolioAnalysisAlphaPostRequest.class);
    }

    /**
     * Convert an instance of PortfolioAnalysisAlphaPostRequest to an JSON string
     *
     * @return JSON string
     */
    public String toJson() {
        return JSON.getGson().toJson(this);
    }
}

