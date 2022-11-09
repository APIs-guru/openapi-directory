var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import axios from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "https://cal-test.adyen.com/cal/services/Notification/v6",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk.serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk.defaultClient = client;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        opts.forEach(function (o) { return o(_this); });
        if (this.serverURL == "") {
            this.serverURL = Servers[0];
        }
        if (!this.defaultClient) {
            this.defaultClient = axios.create({ baseURL: this.serverURL });
        }
        if (!this.securityClient) {
            if (this.security) {
                this.securityClient = CreateSecurityClient(this.defaultClient, this.security);
            }
            else {
                this.securityClient = this.defaultClient;
            }
        }
    }
    // PostCreateNotificationConfiguration - Subscribe to notifications.
    /**
     * Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.
    **/
    SDK.prototype.PostCreateNotificationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostCreateNotificationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/createNotificationConfiguration";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getNotificationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 422:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostDeleteNotificationConfigurations - Delete an existing notification subscription configuration.
    /**
     * This endpoint is used to delete an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL that was in the subscription.
    **/
    SDK.prototype.PostDeleteNotificationConfigurations = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostDeleteNotificationConfigurationsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/deleteNotificationConfigurations";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.genericResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 422:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostGetNotificationConfiguration - Retrieve an existing notification subscription configuration.
    /**
     * This endpoint is used to retrieve the details of the configuration of a notification subscription.
    **/
    SDK.prototype.PostGetNotificationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostGetNotificationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/getNotificationConfiguration";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getNotificationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 422:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostGetNotificationConfigurationList - Retrieve a list of existing notification subscription configurations.
    /**
     * This endpoint is used to retrieve the details of the configurations of all of the notification subscriptions in the marketplace of the executing user.
    **/
    SDK.prototype.PostGetNotificationConfigurationList = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostGetNotificationConfigurationListRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/getNotificationConfigurationList";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getNotificationConfigurationListResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 422:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostTestNotificationConfiguration - Test an existing notification configuration.
    /**
     * This endpoint is used to test an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.
    **/
    SDK.prototype.PostTestNotificationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostTestNotificationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/testNotificationConfiguration";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.testNotificationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 422:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostUpdateNotificationConfiguration - Update an existing notification subscription configuration.
    /**
     * This endpoint is used to update an existing notification subscription configuration. If updating the event types, all event types desired must be provided, otherwise the previous event type configuration will be overwritten.
    **/
    SDK.prototype.PostUpdateNotificationConfiguration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostUpdateNotificationConfigurationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/updateNotificationConfiguration";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = CreateSecurityClient(this.defaultClient, req.security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getNotificationConfigurationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 401:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 403:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 422:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 500:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
